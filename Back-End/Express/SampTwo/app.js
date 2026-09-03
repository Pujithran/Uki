




app.use(XPathExpression.json());

app.get('/api/users',(req,res)=>{
    console.log(req.body);
    res.status(201).json({
        message
    })
})