const express = require('express');
const router = require('express').Router();
const { ObjectId } = require('mongodb');
const users = require('../../models/users');

router.post('/', async (req, res) => {
    const create = await new users(req.body).save();
    if (create._id) {
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'user inserted successfully..!'
        });
    } else {
        res.status(400).json({
            status: false,
            statusCode: 400,
            message: 'something went wrong..!'
        });
    }
});

router.get('/', async (req, res) => {
    const get = await users.find( req.query );
    if (get.length === 0) {
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'No data available..!',
            data: get
        });
    } else {
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Data found..!',
            data: get
        });
    }
});

router.get('/:_id', async (req, res) => {
    const get = await users.findById({ _id: req.params._id });
    if (!get) {
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'No data available..!',
            data: get
        });
    } else {
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Data found..!',
            data: get
        });
    }
});

router.patch('/', async (req, res) => {
    delete req.body.phone;
    const update = await users.findByIdAndUpdate({ _id: ObjectId(req.body._id) }, { $set: req.body });
    if (update._id) {
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'user updated successfully..!',
            data: update
        });
    } else {
        res.status(400).json({
            status: false,
            statusCode: 400,
            message: 'something went wrong..!'
        });
    }
});

router.delete('/:_id', async (req, res) => {
    const remove = await users.findByIdAndDelete({ _id: ObjectId(req.params._id) });
    console.log(remove);
    if (remove == null) {
        res.status(400).json({
            status: false,
            statusCode: 400,
            message: 'something went wrong..!'
        });
    } else {
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'user deleted successfully..!'
        });
    }
});

module.exports = router;