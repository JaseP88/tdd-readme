import pizzaService from "../../../src/services/pizza-service";
import toppingsService from "../../../src/services/toppings-service";
import PIZZAS from "../../../src/models/pizza-model"
import SIZE from "../../../src/models/size-model"
import sinon from "sinon"

describe('Pizza Service', () => {
  
  afterEach(() => {
    sinon.restore()  
  })
  describe('getPizzaPrice', () => {
    describe('with no additional toppings', () => {
      const parameterizedTest = [
        {
          description: 'Size:SMALL and Type: MEATLOVERS', 
          input: {type: PIZZAS.MEATLOVERS, size: SIZE.SMALL, additionalToppings: []},
          output: 10
        },
        {
          description: 'Size:SMALL and Type: SUPREME', 
          input: {type: PIZZAS.SUPREME, size: SIZE.SMALL, additionalToppings: []}, 
          output: 12
        },
        {
          description: 'Size:SMALL and Type: VEGGIE', 
          input: {type: PIZZAS.VEGGIE, size: SIZE.SMALL, additionalToppings: []},
          output: 8
        },
        {
          description: 'Size:SMALL and Type: CUSTOM', 
          input: {type: PIZZAS.CUSTOM, size: SIZE.SMALL, additionalToppings: []},
          output: 6
        },
        {
          description: 'Size:MEDIUM and Type: MEATLOVERS', 
          input: {type: PIZZAS.MEATLOVERS, size: SIZE.MEDIUM, additionalToppings: []},
          output: 12
        },
        {
          description: 'Size:MEDIUM and Type: SUPREME', 
          input: {type: PIZZAS.SUPREME, size: SIZE.MEDIUM, additionalToppings: []},
          output: 15
        },
        {
          description: 'Size:MEDIUM and Type: VEGGIE', 
          input: {type: PIZZAS.VEGGIE, size: SIZE.MEDIUM, additionalToppings: []},
          output: 10
        },
        {
          description: 'Size:MEDIUM and Type: CUSTOM', 
          input: {type: PIZZAS.CUSTOM, size: SIZE.MEDIUM, additionalToppings: []},
          output: 9
        },
        {
          description: 'Size:LARGE and Type: MEATLOVERS', 
          input: {type: PIZZAS.MEATLOVERS, size: SIZE.LARGE, additionalToppings: []},
          output: 15
        },
        {
          description: 'Size:LARGE and Type: SUPREME', 
          input: {type: PIZZAS.SUPREME, size: SIZE.LARGE, additionalToppings: []},
          output: 17
        },
        {
          description: 'Size:LARGE and Type: VEGGIE', 
          input: {type: PIZZAS.VEGGIE, size: SIZE.LARGE, additionalToppings: []},
          output: 13
        },
        {
          description: 'Size:LARGE and Type: CUSTOM', 
          input: {type: PIZZAS.CUSTOM, size: SIZE.LARGE, additionalToppings: []},
          output: 12
        },
        {
          description: 'Unsupported Pizza type', input: {type:
             'CHEESE', size: SIZE.LARGE, additionalToppings: []},
            output: 0
          },
        {
          description: 'Unsupported Pizza size', input: {type:
             PIZZAS.MEATLOVERS, size: 'XLARGE', additionalToppings: []},
            output: 0
          },
      ]
  
      parameterizedTest.forEach(test => {
        describe(test.description, () => {
          it(`should have price of $${test.output}`, () => {
            const result = pizzaService.getPizzaPrice(test.input)
  
            result.should.be.equal(test.output)
          })
        })
      })
    })

    describe('with additional toppings', () => {
      it('should add the result from toppings service', () => {
        sinon.stub(toppingsService, 'getAdditionalToppingPrice').returns(4)

        const result = pizzaService.getPizzaPrice({
          type: PIZZAS.MEATLOVERS,
          size: SIZE.SMALL, 
          additionalToppings: [{name: 'creativeTopping', amount: 1111111}, {name: 'pepperoni', amount: 2}]
        })

        result.should.be.equal(10+4)
      })
    })
  })
})
