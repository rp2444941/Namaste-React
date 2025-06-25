/*
<div id="parent">
<div id="child">
    <h1>i am h1 tag</h1>
    <h2>i am h2 tag</h2>
    </div>
</div>
<div id="child2">
<h1>i am a heading</h1>
<h2>i am a Tag</h2>
</div>
ReactElement(object) => HTML(browser understands)
*/ const parent = React.createElement('div', {
    id: "parent"
}, [
    React.createElement('div', {
        id: "child"
    }, [
        React.createElement('h1', {}, 'i am h1 tag'),
        React.createElement('h2', {}, 'i am h2 tag')
    ]),
    React.createElement('div', {
        id: "child2"
    }, [
        React.createElement('h1', {}, 'i am a heading'),
        React.createElement('h2', {}, 'i am a Tag')
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//# sourceMappingURL=React.6bd02f5a.js.map
