import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CatList(props) {

    return (
        <div className="container border cat-total">
            <strong>Total Lives</strong>:
            {/*{calculateTotalCatLives()}*/}

            <button className="reset-button"
                    // onClick={() => resetAllCats()}
            >
                <FontAwesomeIcon icon="skull-crossbones"/>{' '} Reset
                All the Cats
            </button>

            <button className="revive-button"
                    // onClick={() => reviveAllCats()}
            >
                <FontAwesomeIcon icon="medkit"/>{' '} Revive All the
                Cats
            </button>
        </div>

    );
}
const mapStateToProps = state => ({
    catList: state.cats.catList,
});

const mapDispatchToProps = dispatch => ({
    // userGetById: userId => dispatch(userGetById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatList);