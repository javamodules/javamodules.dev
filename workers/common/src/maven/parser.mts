import { Dependency } from "model/base.mjs";

/**
 * Maven Project Coordinate
 *
 * Describes coordinates for a Maven project in a given context
 */
export interface MavenProjectCoordinate {
  /** Artifact ID setting for the project. */
  artifactId: string;

  /** Group ID setting for the project. */
  groupId: string;

  /** Version set for the project. */
  version: string;
}

/**
 * Maven Dependency Type
 *
 * Describes the type of use for a dependency within a Maven project
 */
export enum DependencyType {
  /** The dependency is expected in the deploy environment. */
  PROVIDED = "provided",

  /** The dependency is provided only to tests. */
  TEST = "test",
}

/**
 * Maven Project Dependency
 *
 * Enriches a basic Maven dependency declaration with project metadata
 */
export interface MavenProjectDependency {
  /**
   * Dependency Coordinates & Version
   */
  dependency: Dependency;

  /**
   * Dependency Type
   */
  type?: DependencyType;

  /**
   * Transitive Dependency Exclusions
   */
  exclusions: Dependency[];
}

/**
 * Maven Project Object Model (POM)
 *
 * Describes the API offered by parsed Maven POM objects
 */
export interface MavenPOM {
  /**
   * Project Name
   */
  name: string;

  /**
   * Project Coordinates
   */
  coordinates: MavenProjectCoordinate;

  /**
   * Project Coordinates (Parent)
   */
  parent?: MavenProjectCoordinate;

  /**
   * Dependencies
   */
  dependencies: MavenProjectDependency[];
}

/**
 * Gradle Module
 *
 * Describes the API offered by Gradle module metadata
 */
export interface GradleModule {
  // Nothing yet.
}

// Base implementation of a Maven POM structure.
class AbstractMavenPOM implements MavenPOM {
  protected constructor(
    readonly name: string,
    readonly coordinates: MavenProjectCoordinate,
    readonly dependencies: MavenProjectDependency[],
    readonly parent?: MavenProjectCoordinate,
  ) {
    // nothing at this time
  }
}

/** Implements a parsed Maven POM. */
export class MavenPOMImpl extends AbstractMavenPOM {
  constructor(
    name: string,
    coordinates: MavenProjectCoordinate,
    dependencies: MavenProjectDependency[],
    parent?: MavenProjectCoordinate,
  ) {
    super(name, coordinates, dependencies, parent);
  }
}

/** Raw Gradle JSON model. */
type GradleRawInfo = {};

/** Implements a parsed Maven POM which is enriched with Gradle metadata. */
export class GradleEnrichedPOMImpl extends AbstractMavenPOM implements GradleModule {
  constructor(
    name: string,
    coordinates: MavenProjectCoordinate,
    dependencies: MavenProjectDependency[],
    // @ts-ignore
    private readonly gradleInfo: GradleRawInfo,
    parent?: MavenProjectCoordinate,
  ) {
    super(name, coordinates, dependencies, parent);
  }
}

/**
 * Parse a Maven POM file as XML
 *
 * @param pom POM content (XML) to parse
 * @return Promise for a parsed POM
 */
// @ts-ignore
export async function parsePomContent(pom: string): Promise<MavenPOM> {
  throw new Error("not yet implemented");
}

/**
 * Parse a Maven POM file as XML
 *
 * @param bucket R2 bucket to read from
 * @param path Path to the POM file
 * @return Promise for a parsed POM
 */
// @ts-ignore
export async function readPom(bucket: R2Bucket, path: string): Promise<MavenPOM> {
  throw new Error("not yet implemented");
}

/**
 * Calculate an expected repository filepath for a given dependency
 *
 * @param dependency Maven dependency to calculate a file path for
 */
// @ts-ignore
export function dependencyToPath(dependency: Dependency): string {
  throw new Error("not yet implemented");
}

/**
 * Parse a Maven POM file from a dependency
 *
 * @param bucket R2 bucket to read from
 * @param path Path to the POM file
 * @return Promise for a parsed POM
 */
// @ts-ignore
export async function readPomForDependency(dependency: Dependency): Promise<MavenPOM> {
  throw new Error("not yet implemented");
}
