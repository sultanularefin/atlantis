

interface FlatListItem_Country{
  item:one_Country_Interface
  onPress:(/*data:combinedInterface */)=> void,
  // style: ViewStyle,
  comp_Height: number,
  widthArg: number,

}


interface one_Country_Interface {
  // abbreviation: string;
  // calling_code: any;
  // country: string;
  // index: number;
  abbreviation: string;
  calling_code: any;
  country: string;
  index: number;
  flag: string,
  unicode: string,
  image_resource_Link: string,

}



 interface login_Request_API__interface {
  password: string,
  email: string,  // email?
  mobile_no: string, //mobile_no?

  remember_me: boolean,


  is_iOS_App: boolean,

}

export type {
  login_Request_API__interface,
  FlatListItem_Country,
  one_Country_Interface,
};

