app.get('/', async (req, res) => {
    try {
        const items = await itemModel.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/stories', async (req, res) => {
    try {
        const newStory = new SuccessStory(req.body);
        await newStory.save();
        res.status(201).json({ message: 'Story added successfully!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/stories', async (req, res) => {
    try {
        const stories = await SuccessStory.find();
        res.status(200).json(stories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/donate', async (req, res) => {
    try {
        const { amount } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: 'usd',
            payment_method_types: ['card'],
        });
        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log("App is Running"));