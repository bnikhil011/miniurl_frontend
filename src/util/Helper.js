

export class Helper  {
 
    static  copyContent  (textToCopy,callback)  {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Text copied to clipboard');
                callback(); // Show Snackbar after copying
            })
            .catch((error) => {
                console.error('Error copying text: ', error);
            });
    };

    static isValidUrl (url)  {
        const pattern = /^(ftp|http|https):\/\/[^ "]+(\.[^ "]+)+$/;
        return pattern.test(url);
    };
    
}

export default Helper
