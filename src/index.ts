// Index of stdin arguments to get the number of lennys
const INDEX_NUMBER_OF_LENNIES: number = 2;

/**
 * Definition of a Lennyer service. These allow for read operations that output
 * lennys based on user input
 */
export interface Lennyer {
  /**
   * Returns a collection of lennys up to the amount of lennies requested
   *
   * @param lennys - Number of lennies to return
   */
  "( ͡° ͜ʖ ͡°)"(lennys: number): "( ͡° ͜ʖ ͡°)"[];
}

/**
 * Concrete lennyer service. Uses in memory lenny generation to return lenny's
 */
export class LeLenny implements Lennyer {
  /**
   * Returns a collection of lennys up to the amount of lennies requested. This
   * fills a statically sized array with lennys.
   *
   * @param lennys - Number of lennys to return
   */
  "( ͡° ͜ʖ ͡°)"(lennys: number): "( ͡° ͜ʖ ͡°)"[] {
    return new Array(lennys).fill("( ͡° ͜ʖ ͡°)");
  }
}

/**
 * Verifies and returns the number of lennys from stdin
 *
 * @param numberOfLennies - Count of lennys
 */
function getNumberOfLennies(numberOfLennies: string | undefined): number {
  if (!numberOfLennies) {
    process.stderr.write(
      "Number of lennys required. Call as `node dist 500`\n"
    );
    return process.exit(1);
  }

  // Parse as int
  const countOfLennies = +numberOfLennies;

  // Verify is integer
  if (isNaN(countOfLennies)) {
    process.stderr.write(
      "Number of lennys required. Call as `node dist 500`\n"
    );
    return process.exit(1);
  }

  return countOfLennies;
}

// Fetch the number of lennys
const numberOfLennies = getNumberOfLennies(
  process.argv[INDEX_NUMBER_OF_LENNIES]
);

// Initialise our lelenny service
const lelenny = new LeLenny();

// Unleash the lennies
const lennys = lelenny["( ͡° ͜ʖ ͡°)"](numberOfLennies);

// Output to stdout
process.stdout.write(lennys.toString() + "\n");
