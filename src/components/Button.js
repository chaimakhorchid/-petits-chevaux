import React, { Component } from 'react'


class Button extends Component {
    render() {
        return (
            <div className="flex">
                <div className="button">
                    <button
                        type="button"
                        className="btn btn-lg"
                        style={{
                            backgroundColor: "grey",
                            color: "white",
                            borderRadius: "30px",
                            width: "25%",
                            display: "block",
                            margin: "auto"


                        }}
                    >
                        Restart
                    </button>
                </div>
            </div>
        )
    }
}
export default Button
