export default class StoreService {

  data = [
    {
      id: 1, name: 'article 1', 
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      price : 25
    },
    {
      id: 2, 
      name: 'article 2', 
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      price : 35
    },
    {
      id: 3, 
      name: 'article 3', 
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      price : 45
    },
    {
      id: 4, 
      name: 'article 4', 
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      price : 52},
    {
      id: 5, 
      name: 'article 5', 
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      price : 65
    },
    {
      id: 6, 
      name: 'article 6', 
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      price : 13
    },
  ];
  
    getProducts() {
      return new Promise((resolve, reject) => {
        setTimeout(()=> {
          resolve(this.data)
          reject(new Error('Somthing bad happened!'));
        }, 700);
      });
    }
  
  }