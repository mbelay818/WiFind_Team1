export default function(providers) {

    let errorIndex = [];

    providers.array.forEach( (provider, index) => {

        //verify that the field contains proper values
        for (const [key, value] of Object.entries(provider)) {
            
            if(value == null || ( key != 'Location' && value.length < 1) ){
                errorIndex.push(index);

            }else if(key == "Location"){
                let lat = value['latitude'];
                let long = value['longitude'];
                
                if(lat < -90 || lat > 90 || long < -180 || long > 180){
                    errorIndex.push(index);
                }
            }
        }
    });

    return errorIndex;
};