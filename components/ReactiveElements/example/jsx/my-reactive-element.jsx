/* @jsx React.DOM */
window.LGI = {};

window.LGI.Carusel = React.createClass({
    getInitialState: function() {
        return {
            color: '#000000'
        };
    },
    render: function() {
        console.log(this.props.caseSensitivePropertyName);

        var renderItem = function (item) {
            return <li key={item.text}>{item.text}</li>;
        };

        if (this.props.items === undefined) {
            return <div></div>;
        }

        return (<div>
            &lt;my-reactive-element&gt;
            <ul style={this.state}>
                {this.props.items.map(renderItem)}
            </ul>
            &lt;/my-reactive-element&gt;
        </div>);
    },
    changeColor: function(color) {
        this.setState({
            color: color
        });
    }
});

document.registerReact('my-reactive-element', window.LGI.Carusel);
