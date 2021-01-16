import React from 'react'
import '../styles/Modal.scss'

export default function EventModal() {
    return (
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="title">Add Event</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="form-line">
                                <label for="title">Title</label>
                                <input type="text" id="title" class="form-control"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}