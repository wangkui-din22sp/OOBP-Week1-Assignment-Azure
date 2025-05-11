import * as week1 from "./week1";

// Define interfaces for Person and City to match the expected structure
interface Person {
  name: string;
  surname: string;
  age: number;
  fullName: string;
  isAdult: boolean;
}

interface City {
  name: string;
  population: number;
  isCapital: boolean;
  country: string;
}

/* Create test cases for the functions in week1.ts using Jest */
describe("calculator", () => {
  test("add with positive values", () => {
    expect(week1.calculator(1, 2, "+")).toBe(3);
  });
  test("add with negative values", () => {
    expect(week1.calculator(-1, -2, "+")).toBe(-3);
  });
  test("add with positive and negative values", () => {
    expect(week1.calculator(1, -2, "+")).toBe(-1);
  });

  test("subtract with positive values", () => {
    expect(week1.calculator(1, 2, "-")).toBe(-1);
  });
  test("subtract with negative values", () => {
    expect(week1.calculator(-1, -2, "-")).toBe(1);
  });
  test("subtract with positive and negative values", () => {
    expect(week1.calculator(1, -2, "-")).toBe(3);
  });

  test("multiply with small numbers", () => {
    expect(week1.calculator(1, 2, "*")).toBe(2);
  });
  test("multiply with large numbers", () => {
    expect(week1.calculator(100, 200, "*")).toBe(20000);
  });
  test("multiply with negative numbers", () => {
    expect(week1.calculator(-1, -2, "*")).toBe(2);
  });
  test("multiply with positive and negative numbers", () => {
    expect(week1.calculator(1, -2, "*")).toBe(-2);
  });

  test("divide with small numbers", () => {
    expect(week1.calculator(1, 2, "/")).toBe(0.5);
  });
  test("divide with large numbers", () => {
    // Use toBeCloseTo to handle floating-point precision
    expect(week1.calculator(6412122, 5563, "/")).toBeCloseTo(
      1152.6374258493618551141470429624,
      5
    );
  });
});

describe("createPerson", () => {
  test("create an adult person", () => {
    expect(week1.createPerson("John", "Doe", 30)).toEqual({
      name: "John",
      surname: "Doe",
      age: 30,
      fullName: "John Doe",
      isAdult: true,
    });
  });
  test("create a minor person", () => {
    expect(week1.createPerson("Jane", "Doe", 15)).toEqual({
      name: "Jane",
      surname: "Doe",
      age: 15,
      fullName: "Jane Doe",
      isAdult: false,
    });
  });
});

describe("personToString", () => {
  test("person to string with an adult", () => {
    const person: Person = {
      name: "John",
      surname: "Doe",
      age: 30,
      fullName: "John Doe",
      isAdult: true,
    };
    expect(week1.personToString(person)).toBe(
      "The person John, Doe is 30 years old, and is an adult"
    );
  });

  test("person to string with a minor", () => {
    const person: Person = {
      name: "Jane",
      surname: "Doe",
      age: 15,
      fullName: "Jane Doe",
      isAdult: false,
    };
    expect(week1.personToString(person)).toBe(
      "The person Jane, Doe is 15 years old, and is a minor"
    );
  });
});

describe("cityNameAndPopulationToString", () => {
  test("city name and population to string", () => {
    const amsterdam: City = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };
    expect(week1.cityNameAndPopulationToString(amsterdam)).toBe(
      "Amsterdam has a population of 821000"
    );
  });
});

describe("isCapital", () => {
  test("is capital true", () => {
    const amsterdam: City = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };
    expect(week1.isCapital(amsterdam)).toBe(true);
  });

  test("is capital false", () => {
    const philadelphia: City = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };
    expect(week1.isCapital(philadelphia)).toBe(false);
  });
});

describe("getCountryName", () => {
  test("get country name", () => {
    const amsterdam: City = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };
    expect(week1.getCountryName(amsterdam)).toBe("Netherlands");
  });
});

describe("withinSameCountry", () => {
  test("whether the two cities within the same country", () => {
    const amsterdam: City = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };
    const philadelphia: City = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };
    expect(week1.withinSameCountry(amsterdam, philadelphia)).toBe(
      "Amsterdam and Philadelphia are not within the same country");
    });

  test("whether the two cities within the same country", () => {
    const amsterdam: City = {
      name: "Tokyo",
      population: 37400068,
      isCapital: true,
      country: "Japan",
    };
    const amsterdam2: City = {
      name: "Kyoto",
      population: 1474570,
      isCapital: false,
      country: "Japan",
    };
    expect(week1.withinSameCountry(amsterdam, amsterdam2)).toBe(
      "Tokyo and Kyoto are within the same country");
    });
  });


describe("getLargerPopulation", () => {
  test("get larger population", () => {
    const amsterdam: City = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };
    const philadelphia: City = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };
    expect(week1.getLargerPopulation(amsterdam, philadelphia)).toBe(philadelphia);
  });

  test("get larger population with opposite order of parameters", () => {
    const amsterdam: City = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };
    const philadelphia: City = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };
    expect(week1.getLargerPopulation(philadelphia, amsterdam)).toBe(philadelphia);
  });
});

describe("getLargerPopulationString", () => {
  test("get larger population string", () => {
    const amsterdam: City = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };
    const philadelphia: City = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };
    expect(week1.getLargerPopulationString(amsterdam, philadelphia)).toBe(
      "Philadelphia has larger population than Amsterdam"
    );
  });

  test("get larger population string with opposite order of parameters", () => {
    const amsterdam: City = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };
    const philadelphia: City = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };
    expect(week1.getLargerPopulationString(philadelphia, amsterdam)).toBe(
      "Philadelphia has larger population than Amsterdam"
    );
  });
});


describe("getLargestPopulationString", () => {
  test("get the largest population string", () => {
  const city1: City = {
    name: "Amsterdam",
    population: 821000,
    country: "Netherlands",
    isCapital: true,
  };
  const city2: City = {
    name: "Philadelphia",
    population: 1576000,
    country: "USA",
    isCapital: false,
  };
  const city3: City = {
    name: "Tokyo",
    population: 37400068,
    country: "Japan",
    isCapital: true,
  };
    expect(week1.getLargestPopulationString(city1, city2, city3)).toBe(
      "Tokyo has the largest population"
    );
  });

  test("get the largest population string with different order of parameters", () => {
    const city1: City = {
      name: "Tokyo",
      population: 37400068,
      country: "Japan",
      isCapital: true,
    };
    const city2: City = {
      name: "Amsterdam",
      population: 821000,
      country: "Netherlands",
      isCapital: true,
    };
    const city3: City = {
      name: "Philadelphia",
      population: 1576000,
      country: "USA",
      isCapital: false,
    };
    expect(week1.getLargestPopulationString(city1, city2, city3)).toBe(
        "Tokyo has the largest population"
      );
    });

    test("get the largest population string with different order of parameters", () => {
      const city1: City = {
        name: "Amsterdam",
        population: 821000,
        country: "Netherlands",
        isCapital: true,
      };
      const city2: City = {
        name: "Tokyo",
        population: 37400068,
        country: "Japan",
        isCapital: true,
      };
      const city3: City = {
        name: "Philadelphia",
        population: 1576000,
        country: "USA",
        isCapital: false,
      };
      expect(week1.getLargestPopulationString(city1, city2, city3)).toBe(
          "Tokyo has the largest population"
        );
      });

  });


  describe("getPopulationOrder", () => {
    test("order by population (Tokyo > Philadelphia > Amsterdam)", () => {
      const city1: City = {
        name: "Amsterdam",
        population: 821000,
        country: "Netherlands",
        isCapital: true,
      };
      const city2: City = {
        name: "Philadelphia",
        population: 1576000,
        country: "USA",
        isCapital: false,
      };
      const city3: City = {
        name: "Tokyo",
        population: 37400068,
        country: "Japan",
        isCapital: true,
      };
      expect(week1.getPopulationOrder(city1, city2, city3)).toBe(
        "Tokyo > Philadelphia > Amsterdam"
      );
    });
    
    test("test with different order of parameters", () => {
      const city1: City = {
        name: "Tokyo",
        population: 37400068,
        country: "Japan",
        isCapital: true,
      };
      const city2: City = {
        name: "Amsterdam",
        population: 821000,
        country: "Netherlands",
        isCapital: true,
      };
      const city3: City = {
        name: "Philadelphia",
        population: 1576000,
        country: "USA",
        isCapital: false,
      };
      expect(week1.getPopulationOrder(city1, city2, city3)).toBe(
        "Tokyo > Philadelphia > Amsterdam"
      );
    });
  
    test("test with different order of parameters", () => {
        const city1: City = {
          name: "Amsterdam",
          population: 821000,
          country: "Netherlands",
          isCapital: true,
        };
        const city2: City = {
          name: "Tokyo",
          population: 37400068,
          country: "Japan",
          isCapital: true,
        };
        const city3: City = {
          name: "Philadelphia",
          population: 1576000,
          country: "USA",
          isCapital: false,
        };
        expect(week1.getPopulationOrder(city1, city2, city3)).toBe(
          "Tokyo > Philadelphia > Amsterdam"
        );
    });
  
    });












