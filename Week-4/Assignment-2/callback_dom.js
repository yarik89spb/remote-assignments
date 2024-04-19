function ajax(src, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        // Get data as JS object if the source responds
        if(xhr.readyState === 4){ // Exectuion has finished
            if(xhr.status === 200){
            const data = JSON.parse(xhr.responseText)
            callback(data);
            } 
            else{ // Source refuses to send data 
                alert(
                    `
                    ${xhr.status}
                    Data source does not response. Might be blocked by 
                    CORS policy or source website is not available
                    `)
            }  
        }
    }
    xhr.open('GET', src);
    xhr.send();
}

function render(data) {
    // Add new section that contains products
    let section = document.createElement('section');
    section.id = 'product-list';

    // Pseudo-list for products
    let products = '';
    // Iterate over items (products) inside the JSON 
    for(let item of data){
        products += `
        <h3>${item.name}</h3>
        <p> PRICE: ${item.price}$ 
        <br> 
        INFO: ${item.description}</p>
        `;
        
    }
    section.innerHTML = products;
    // Add section-"list" in the end of body element 
    document.querySelector('body').appendChild(section).scrollIntoView({ behavior: 'smooth', block: 'end' });
    
}

ajax(
    'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products',
    function (response) {
        render(response);
    }
); 
