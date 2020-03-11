import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {connect} from "react-redux";

function CatItem(props) {

    // const {id, name, livesCount} = props.counter;
    // const {counter, incrementLives, decrementLives, reviveCat, resetCat, removeCat} = props;

    // const countHearts = () => {
    //     let hearts = ' ';
    //     for (let i = 1; i <= livesCount; i++) {
    //         document.write(<FontAwesomeIcon icon="heart"/>);
    //     }
    // }

    return (
        <div className="col-sm-6 col-lg-6 col-xs-12">
            <div className="card my-2 m-1">
                <div className="card-body">

                    <div className="cat-avatar card-img-top">
                        <FontAwesomeIcon icon="cat"/>
                    </div>
                    <div className="card-body">
                        <p className="cat-name card-title">
                            {/*{name}*/}
                        </p>
                        <div className="cat-header ">
                            Lives:
                            {/*{livesCount}*/}
                        </div>
                        <p><strong>Control Lives</strong></p>
                        <p>
                            <button
                                // onClick={() => decrementLives(id)}
                            >-
                            </button>

                            <strong>
                                {/*{livesCount}*/}
                            </strong>&nbsp;
                            <button
                                // onClick={() => incrementLives(id)}
                            >+
                            </button>

                            <button className="revive-button"
                                    // onClick={() => reviveCat(name, id)}
                            >
                                <FontAwesomeIcon
                                    icon="medkit"/>{' '} Revive
                                {/*{name}*/}
                            </button>
                        </p>
                        <p>
                            <button className="reset-button"
                                    // onClick={() => resetCat(name, id)}
                            >
                                <FontAwesomeIcon
                                    icon="skull-crossbones"/>{' '} Reset
                                {/*{name}*/}
                            </button>

                            <button className="remove-button"
                                    // onClick={() => removeCat(counter)}
                            >
                                <FontAwesomeIcon
                                    icon="times-circle"/>{' '} Remove
                                {/*{name}*/}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    catList: state.cats.catList,
});

const mapDispatchToProps = dispatch => ({
    // userGetById: userId => dispatch(userGetById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatItem);