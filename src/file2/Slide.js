import Rreact from 'react';

export default class Slide extends React.Component
{
	state = {
		isLoaded: false
	}

	ComponentDidMount(){
		this.load(this.img);
	}

	load(img){
		var image = img;
		image.src = this.props.url;
		image.onload = () => {
			this.onImageLoaded();
		}
		image.onerror = () => {
			this.onImageLoadError(this.props.url);
		}
	}

    onImageLoaded = () =>{
    	this.setState({
    		isLoaded: true
    	});
    }

    onImageLoadError = () => {
    	this.setState({
    		isError: true
    	});
    }




	render() {
		let url = this.props.url;
		return(
			<div ClassName="slide">
			{!this.state.isLoaded && <img src="./images/loading.svg" alt="loading" />}
			<img ref={(img) => this.img = img} />
			</div>
			);
	}
}