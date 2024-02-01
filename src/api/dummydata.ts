
interface FruitSpecification {
    Color: string;
    Min_Order_Value: string;
    Odor_Flavour: string;
    Material: string;
    Type: string;
    Form?: string;
  }

export interface prodDataType{
    prod_id: number,
    prod_name: string,
    prod_desc: string,
    prod_img: string[],
    prod_price: number,
    prod_size: string,
    prod_specification:FruitSpecification,
    prod_about: string;
    prod_type: string[]
}


export interface blogType{
    id: number,
    image: string[],
    transcript: string
}