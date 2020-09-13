module.exports = {
    exportTrailingslash: true,
    exportPathMap: function(){
        const paths ={
            "/": {page: "/"},
            "/blog": {page: "/blog"},
            "/contact": {page: "/contact"}
        };

        return paths;
    } 
}