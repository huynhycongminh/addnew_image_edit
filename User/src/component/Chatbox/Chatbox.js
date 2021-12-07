import React, { Component } from "react";
import $ from 'jquery';

export default class Chatbox extends Component {

    constructor(props) {
        super(props);
        this.onChangeChat = this.onChangeChat.bind(this);
        this.onSubmitChat = this.onSubmitChat.bind(this);

        this.state = {
            inputchat: '',
        }
    }

    onChangeChat(e) {
        this.setState({
            inputchat: e.target.value
        });
    }

    onSubmitChat(e) {
        e.preventDefault();

        const inputchat = this.state.inputchat
        setTimeout(function () {
            $('#info-chatbot').append(`
                <div class="box-right">
                    <p class="show-chat-customer text-chatbot">`+inputchat+`</p>
                </div>
            `)  
        }, 900);
        this.setState({
            inputchat: ''
        });
        
        const InputChat = inputchat.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

        if(InputChat === 'what-is-the-best-car'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">BMW</p>
                    </div>
                `)
            }, 1900);
        }
        else if(InputChat === 'which-car-is-the-cheapest'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">'Xe Rẻ nhất'</p>
                    </div>
                `)  
            }, 1900);
        }
        else{
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">For more information, please contact Hotline: 0357359239</p>
                    </div>
                `)  
            }, 1900);
        }
        
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary chatbox" type="button" data-toggle="collapse" data-target="#collapseChatbox" aria-expanded="false" aria-controls="collapseExample">
                    <i class="fa fa-comments"></i>  
                </button>
                <div class="collapse" id="collapseChatbox">
                    <div class="container-chatbox">
                        <div class="header-chatbox">
                            <h4>Chat with me</h4>
                            <button class="close-chatbox" type="button" data-toggle="collapse" data-target="#collapseChatbox" aria-expanded="false" aria-controls="collapseExample" aria-label="Close">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                        <div class="collapse-chatbox">
                            <div class="body-chatbox">
                                <div id="info-chatbot">
                                    <div class="box-left">
                                        <p class="show-chat-admin text-chatbot">May i help you ?</p>
                                    </div>
                                </div>
                            </div>
                            <div class="input-chatbox">
                                <form onSubmit={this.onSubmitChat}>
                                    <input type="text" onChange={this.onChangeChat} value={this.state.inputchat} class="form-chatbox" placeholder="Aa" />
                                    <button type="button" class="btn-input-chatbox"><i class="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}