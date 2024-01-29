import React, {Component} from "react"

class ImageComponent extends Component {
    render() {
        return (
                <img className={this.props.animation} src={this.props.src} alt={this.props.alt} />
        )
    }
}
export default ImageComponent