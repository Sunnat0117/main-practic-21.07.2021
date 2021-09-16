const request = require('supertest');
let server;
const { Cotegory } = require('../../models/cotegory')
describe('api /cotegories', ()=>{
    beforeEach(()=>{
        server = require('../../index')
    });
    afterEach( async ()=>{
        server.close();
        await Cotegory.remove({})
    });
    describe('GET', ()=>{
        it('should return all cotegories', async ()=>{
        
            // Cotegory.collection.insertMany([
            //     {name :"3D max"},
            //     {name : 'nodejs'}
            // ]);      
            const cotegory = new Cotegory({name : "SMM"});
            await cotegory.save()
            const response = await request(server).get('/api/cotegory/');
            console.log("bu cotegory classi",Cotegory)     
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(2); 
            expect(response.body.some(cat=> cat.name =='3D max')).toBeThruthy();

        });
    });
});


describe('GET/ID', ()=>{
    it('should return cotegory if the valid id is given', async ()=>{
        const cotegory = new Cotegory({name : 'sun\'iy idrok'});
        await  cotegory.save();

       const response =  request(server).get('api/cotegory/' + cotegory._id)
       expect(response.body).toHaveProperty('name', "sun\'iy idrok")
    })
})