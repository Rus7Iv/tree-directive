function buildTree(data) {
    let tree = {};
    for(let item of data) {
        if(item.head === null) {
            tree[item.id] = item;
            tree[item.id].children = [];
        }
    }
    for(let item of data) {
        if(item.head !== null) {
            if(tree[item.head]) {
                tree[item.head].children.push(item);
            }
        }
    }
    return tree;
}

function displayTree(tree) {
    let html = '';
    for(let id in tree) {
        html += '<li>';
        html += tree[id].name + ' (' + tree[id].price + ')';
        if(tree[id].children && tree[id].children.length > 0) {
            html += '<ul>';
            html += displayTree(tree[id].children);
            html += '</ul>';
        }
        html += '</li>';
    }
    return html;
}

fetch('./services.json')
    .then(response => response.json())
    .then(data => {
        let tree = buildTree(data.services);
        let html = displayTree(tree);
        document.getElementById('tree').innerHTML = html;
        let items = document.querySelectorAll('li');
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                this.classList.toggle('open');
                e.stopPropagation();
            });
        });
    });
