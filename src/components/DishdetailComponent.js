import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(selectedDish) {
        return (
            <Card>
                <CardImg top src={selectedDish.image} alt={selectedDish.name}/>
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    render() {
        const selectedDish = this.props.selectedDish;
        if (selectedDish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selectedDish)}
                    </div>
                </div>
            );
        } else {
            return (
              <div></div>
            );
        }

    }

}

export default DishDetail;