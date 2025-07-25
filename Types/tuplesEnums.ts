// const stuff: (string|number)[] = [1,'asd', 'asdasd', 'asdasd',2]

// const color: number[] = [23, 45, 234, 234]

const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, 'ok']
// goodRes[0] = '200'
goodRes.push(123)
goodRes.pop()
goodRes.pop()
goodRes.pop()

const responses: HTTPResponse[] = [[404, 'Not Found'], [200, 'OK']]

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERD,
    RETURNED
}

const myStatus = OrderStatus.DELIVERD;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERD;
}

isDelivered(OrderStatus.RETURNED);


enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
}


export { };