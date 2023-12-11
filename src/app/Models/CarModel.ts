interface CarModel {
  Category: string;
  Make: string;
  Model: string;
  Year: number;
}

interface CarData {
  data: {
    car_Model_Lists: {
      results: CarModel[];
    };
  };
}
