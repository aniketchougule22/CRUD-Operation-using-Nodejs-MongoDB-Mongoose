const express = require('express');
const router = require('express').Router();
const { ObjectId } = require('mongodb');
const mobiles = require('../../models/mobiles');

router.post('/', async (req, res) => {
    const create = await new mobiles(req.body).save();
    if (create._id) {
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'mobile inserted successfully..!'
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
    let { model, brand, price } = req.query;
    let query = {};

    if (model) {
        query.model = model;
    }

    if (brand) {
        query.brand = brand;
    }

    if (price) {
        query.price = price;
    }

    const get = await mobiles.find( query );
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
    const get = await mobiles.findById({ _id: ObjectId(req.params._id) });
    if (get==null) {
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'passing wrong _id..!',
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
    const update = await mobiles.findByIdAndUpdate({ _id: ObjectId(req.body._id) }, { $set: req.body });
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
    const remove = await mobiles.findByIdAndDelete({ _id: ObjectId(req.params._id) });
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