export interface IExpert {
  id: string;
  attributes: {
    preview_photo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    direction: string;
    email: string;
    english_level: string;
    level: string;
    behance: string;
    linkedin: string;
    telegram: string;
    name: string;
    position: string;
    price: number;
  };
}
