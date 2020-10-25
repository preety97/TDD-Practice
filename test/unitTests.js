const chai = require('chai');
const assert = chai.assert;
const functions= require('../functions');

describe('sum', function(){
    it('should return 6 whn adding 3 and 3', function(){
        assert.equal(functions.sum(3, 3), 6);
    });
    it('should return -6 whn adding -3 and -3', function(){
        assert.equal(functions.sum(-3, -3), -6);
    });
    it('should return 3 whn adding 6 and -3', function(){
        assert.equal(functions.sum(6, -3), 3);
    });
    it('should return 0 whn adding 0 and 0', function(){
        assert.equal(functions.sum(0, 0), 0);
    });
    it('should return 9.8 whn adding 6 and 3.8', function(){
        assert.equal(functions.sum(6, 3.8), 9.8);
    });
});
describe('product', function(){
    it('should return 6 whn doing product of 2 and 3', function(){
        assert.equal(functions.product(2, 3), 6);
    });
    it('should return 0 whn doing product of 0 and 4', function(){
        assert.equal(functions.product(0, 4), 0);
    });
    it('should return 1 whn doing product of 1 and 1', function(){
        assert.equal(functions.product(1, 1), 1);
    });
    it('should return -2 whn doing product of  -1 and 2', function(){
        assert.equal(functions.product(-1, 2), -2);
    });
   
});
describe('min', function(){
    it('should return 1 whn comparing 1 and 2', function(){
        assert.equal(functions.min(1, 2), 1);
    });
    it('should return -4 whn comparing -4 and -1', function(){
        assert.equal(functions.min(-4, -1), -4);
    });
    it('should return -5 whn comparing 5 and -5', function(){
        assert.equal(functions.min(5, -5), -5);
    });
    it('should return 0 whn comparing 5 and 0', function(){
        assert.equal(functions.min(5, 0), 0);
    });
    it('should return 5 whn comparing 5 and 5', function(){
        assert.equal(functions.min(5, 5), 5);
    });
});
describe('max', function(){
    it('should return 2 whn comparing 1 and 2', function(){
        assert.equal(functions.max(1, 2), 2);
    });
    it('should return -1 whn comparing -4 and -1', function(){
        assert.equal(functions.max(-4, -1), -1);
    });
    it('should return 5 whn comparing 5 and -5', function(){
        assert.equal(functions.max(5, -5), 5);
    });
    it('should return 4 whn comparing 4 and 0', function(){
        assert.equal(functions.max(4, 0), 4);
    });
    it('should return 5 whn comparing 5 and 5', function(){
        assert.equal(functions.max(5, 5), 5);
    });
});
describe('head', function(){
    it('should return null if array is empty', function(){
        assert.equal(functions.head([]), null);
    });
   it('should return "Gwen" if array is ["Gwen","Ben","Max"]', function(){
        assert.equal(functions.head(["Gwen","Ben","Max"]), "Gwen");
    });
    it('should return 1 if array is [1,2,3]', function(){
        assert.equal(functions.head([1,2,3]), 1);
    });
    it('should return 2 if array is [2]', function(){
        assert.equal(functions.head([2]), 2);
    });
   
});
describe('tail', function(){
    it('should return null if array is empty', function(){
        assert.equal(functions.tail([]), null);
    });
   it('should return "Max" if array is ["Gwen","Ben","Max"]', function(){
        assert.equal(functions.tail(["Gwen","Ben","Max"]), "Max");
    });
    it('should return 3 if array is [1,2,3]', function(){
        assert.equal(functions.tail([1,2,3]), 3);
    });
    it('should return 2 if array is [2]', function(){
        assert.equal(functions.tail([2]), 2);
    });
   
});
describe('mid', function(){
    it('should return null if array is empty', function(){
        assert.equal(functions.mid([]), null);
    });
    it('should return "Ben" if array is ["Gwen","Ben","Max"]', function(){
        assert.equal(functions.mid(["Gwen","Ben","Max"]), "Ben");
    });
    it('should return 2 if array is [1,2,3]', function(){
        assert.equal(functions.mid([1,2,3]), 2);
    });
    it('should return 2 if array is [2]', function(){
        assert.equal(functions.mid([2]), 2);
    });
    it('should return [2,3] if array is [1,2,3,4]', function(){
        assert.deepEqual(functions.mid([1,2,3,4]),[2,3]);
    });
   
});
describe('total', function(){
    it('should return 0 if array is empty', function(){
        assert.equal(functions.total([]), 0);
    });
    it('should return 4 if array is [1,2,1]', function(){
        assert.equal(functions.total([1,2,1]), 4);
    });
    it('should return 6 if array is [-2,5,3]', function(){
        assert.equal(functions.total([-2,5,3]), 6);
    });
    it('should return -6 if array is [-1,-3,-2]', function(){
        assert.equal(functions.total([-1,-3,-2]), -6);
    });
    it('should return 1 if array is [1]', function(){
        assert.equal(functions.total([1]), 1 );
    });
    it('should return 0tennine if array is ["ten","nine"]', function(){

        assert.equal(functions.total(["ten","nine"]),"0tennine");
    });
});
describe('smallest', function(){
    it('should return null if array is empty', function(){
        assert.equal(functions.smallest([]), null);
    });
    it('should return 1 if array is [10,5,1]', function(){
        assert.equal(functions.smallest([10,5,1]), 1);
    });
    it('should return 1 if array is [1,2,1]', function(){
        assert.equal(functions.smallest([1,2,1]), 1);
    });
    it('should return -2 if array is [-2,5,3]', function(){
        assert.equal(functions.smallest([-2,5,3]), -2);
    });
    it('should return -3 if array is [-1,-3,-2]', function(){
        assert.equal(functions.smallest([-1,-3,-2]), -3 );
    });
    it('should return 1 if array is [1]', function(){
        assert.equal(functions.smallest([1]), 1 );
    });
    it('should return nine if array is ["ten","nine"]', function(){

        assert.equal(functions.smallest(["ten","nine"]),"nine");
    });
});
describe('largest', function(){
    it('should return null if array is empty', function(){
        assert.equal(functions.largest([]), null);
    });
    it('should return 10 if array is [10,5,1]', function(){
        assert.equal(functions.largest([10,5,1]), 10);
    });
    it('should return 2 if array is [1,2,1]', function(){
        assert.equal(functions.largest([1,2,1]), 2);
    });
    it('should return 5 if array is [-2,5,3]', function(){
        assert.equal(functions.largest([-2,5,3]), 5);
    });
    it('should return -1 if array is [-1,-3,-2]', function(){
        assert.equal(functions.largest([-1,-3,-2]), -1 );
    });
    it('should return 1 if array is [1]', function(){
        assert.equal(functions.largest([1]), 1 );
    });
    it('should return ten if array is ["ten","nine"]', function(){

        assert.equal(functions.largest(["ten","nine"]),"ten");
    });
});
describe('merge', function(){
    it('should return null if array is empty', function(){
        let arr1 = [];
        let arr2 = [];
        assert.isNull(functions.merge(arr1,arr2));
    });
    it('should return [4,-9,7,0] if array is [4,7] and [-9,0]', function(){
        let arr1 = [4,7];
        let arr2 = [-9,0];
        assert.deepEqual(functions.merge(arr1,arr2),[ 4, -9 , 7 ,0]);
    });
        /* it('should return 2 if array is [1,2,1]', function(){
        assert.equal(functions.largest([1,2,1]), 2);
    });
    it('should return 5 if array is [-2,5,3]', function(){
        assert.equal(functions.largest([-2,5,3]), 5);
    });
    it('should return -1 if array is [-1,-3,-2]', function(){
        assert.equal(functions.largest([-1,-3,-2]), -1 );
    });
    it('should return 1 if array is [1]', function(){
        assert.equal(functions.largest([1]), 1 );
    });
    it('should return ten if array is ["ten","nine"]', function(){

        assert.equal(functions.largest(["ten","nine"]),"ten");
    });*/
});
