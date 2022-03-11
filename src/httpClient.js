const apiKey = 'acm18kksJq9drZHIqyunf9hFuy3pQbzkarWngIhV';


export default {
  getPackage(packageID) {
    return fetch(
        `https://ndygf7o8p1.execute-api.eu-central-1.amazonaws.com/prod/?tripID=${packageID}`,{cache: "default",
      
    headers:{
        'x-api-key': apiKey,
        "origin": "https://www.tryp.com"
    }}
      ).then(res => res.json().then((data)=>{
          if(res.status>=400&&res.status<=599){
            return 'error'
          }
          return data;
      })).catch((error)=>{
        return 'error';
      });
  },
}