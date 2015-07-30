/**
 * Created by webonise on 30/7/15.
 */
var Hello = React.createClass({
    render:function(){
        return <div> Hello {this.props.name}</div>
    }
})

React.render(<Hello name='world',document.body/>)