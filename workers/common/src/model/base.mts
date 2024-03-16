import type { VulnerabilityInfo } from "./nvd.mjs";

/** Maven dependency coordinates. */
export type DependencyCoordinate = {
    groupId: string,
    artifactId: string,
};

/** String version like `1.0` or `something-SNAPSHOT`. */
export type LiteralStringVersion = string

/** Symbolic (special) versions recognized by the system. */
export enum SymbolicVersion {
    LATEST = 'latest'
}

/** Dependency version notation options. */
export type DependencyVersion = LiteralStringVersion | SymbolicVersion | {
    major: string,
    minor: string,
    micro?: string,
}

/** Dependency with coordinate and version. */
export type Dependency = {
    coordinate: DependencyCoordinate,
    version: DependencyVersion
};

/** Features that can be detected for a given library or artifact */
export enum JavaFeature {
    MODULAR = 'modular'
}

/** Repository where dependency info can be pulled from. */
export type Repository = {
    /** Simple name given to this repository. */
    name: string,

    /** Base URI where this repository serves assets. */
    uri: string,
}

/** Link type for URLs. */
type Link = URL | string;

/** Source control providers recognized for dependency sources. */
enum SourceControlProvider {
    GITHUB = 'github',
    GITLAB = 'gitlab',
    ANY_GIT = 'git'
}

/** Types of source control systems. */
enum SourceControlType {
    GIT = 'git'
}

/** Source control information detected for a repository. */
export type SourceControlInfo = {
    /** Link to the repository homepage. */
    link?: Link;

    /** Provider, if known. */
    provider?: SourceControlProvider;

    /** Type of source control in use, if known. */
    type?: SourceControlType;
}

/**
 * Dependency Content
 *
 * Specifies longer-form content provided in POMs and other relevant material
 */
export interface DependencyContent {
    /** Name to show for this dependency. */
    name?: string;

    /** Longer description to show for this dependency. */
    description?: string;

    /** Homepage for this dependency. */
    homepage?: Link;

    /** Source control link for this dependency. */
    scm?: SourceControlInfo;
}

/** Explains a package coordinate type. */
export interface PackageCoordinate {
    /**
     * Return this package coordinate as a string
     *
     * @return String formatted package coordinate
     */
    asString(): string

    /**
     * Return the group for this coordinate
     *
     * @return Group value
     */
    group(): string

    /**
     * Return the group for this coordinate
     *
     * @return Group value
     */
    artifact(): string

    /**
     * Indicate whether a version is available for this package
     *
     * @return Whether this dependency is versioned
     */
    versioned(): boolean

    /**
     * Return the version declared for this package
     *
     * @return Dependency version or `null` if none is specified
     */
    version(): string | null
}

/** Base implementation of Maven-style coordinate behavior */
abstract class BaseMavenCoordinate {
    constructor(
        protected _groupId: string,
        protected _artifactId: string,
        protected _version?: string,
    ) {
        // nothing
    }

    versioned(): boolean {
        return !!this.version;
    }

    group(): string {
        return this._groupId;
    }

    artifact(): string {
        return this._artifactId;
    }

    version(): string {
        return this._version || null;
    }
}

/** Well-formed Maven coordinate. */
export class MavenCoordinate extends BaseMavenCoordinate implements PackageCoordinate {
    asString(): string {
        const base = `${this._groupId}:${this._artifactId}`;
        if (this.versioned()) {
            return `${base}:${this._version}`;
        }
        return base;
    }
}

/** Well-formed PURL package url. */
export class Purl extends BaseMavenCoordinate implements PackageCoordinate {
    asString(): string {
        throw new Error('not yet implemented');
    }
}

/**
 * Dependency Utilities
 *
 * Access to further information about dependencies
 */
export interface DependencyUtils {
    /**
     * Query known vulnerabilities for this dependency
     *
     * @return Promise for vulnerability info
     */
    vulnerabilities(): Promise<VulnerabilityInfo>

    /**
     * Obtain the well-formed Maven coordinate for this dependency
     *
     * @return Maven coordiante structure
     */
    mavenCoordinate(): MavenCoordinate

    /**
     * Obtain the well-formed PURL (package URL) for this dependency
     *
     * @return Purl structure
     */
    purl(): Purl
}

/**
 * Dependency Info
 *
 * Describes information gathered for a given addressable Maven dependency
 */
export interface DependencyInfo extends DependencyUtils {
    /** Version and coordinate info. */
    dependency: Dependency;

    /** Features detected for this dependency. */
    features: JavaFeature[];

    /** Repository which provided this dependency info. */
    repository: Repository;

    /** Specifies content to be shown for this dependency. */
    content: DependencyContent;
}
