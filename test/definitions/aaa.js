framework.config.isDefinition = true;
framework.resize('/*.jpg', '50%');
framework.merge('/merge.js', '/js/test.js', 'file.txt');
framework.merge('/merge-blocks-a.js', '/js/block.js#a,c,d');
framework.merge('/merge-blocks-b.js', '/js/block.js#b');
framework.map('/fet.txt', framework.path.public('file.txt'));
framework.map('/blocks-a.js', '/js/block.js#a,c,d');
framework.map('/blocks-b.js', '/js/block.js#b');
framework.map('/blocks-c.js', '/js/block.js#a,b');