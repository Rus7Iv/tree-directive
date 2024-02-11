function buildTree(data) {
    let tree = {};
    for(let item of data) {
        item.children = [];
        tree[item.id] = item;
    }
    for(let id in tree) {
        if(tree[id].head !== null) {
            tree[tree[id].head].children.push(tree[id]);
        }
    }
    return tree;
}

function displayTree(tree, level = 0) {
    let html = '';
    for(let id in tree) {
        if(tree[id].head === null) {
            html += createNode(tree[id], level);
        }
    }
    return html;
}

function createNode(node, level) {
    let html = '<li style="margin-left:' + (level * 20) + 'px">';
    if(node.node === 1) {
        html += '<span class="folder-icon"></span>';
    }
    html += node.name + ' (' + node.price + ')';
    if(node.children.length > 0) {
        html += '<ul>';
        for(let child of node.children) {
            html += createNode(child, level + 1);
        }
        html += '</ul>';
    }
    html += '</li>';
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
