import { useState, useEffect } from "react"
import 'bootstrap/scss/bootstrap.scss'

const data = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60
  }
]

function MenuItem({item, pickToShoppingList}) {
  return (<>
    <a href="#" className="list-group-item list-group-item-action"
      onClick={(e) => {
        e.preventDefault()
        pickToShoppingList(item)
      }}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{item.name}</h5>
        <small>${item.price}</small>
      </div>
      <p className="mb-1">{item.description}</p>
    </a>
  </>)
}

function Menu({menu, pickToShoppingList}) {
  return (<>
    <div className="list-group">
      {
        menu.map(item => <MenuItem key={item.id} item={item} pickToShoppingList={pickToShoppingList}/>)
      }
    </div>
  </>)
}

function ShoppingListCart({shoppingList, setShoppingList, updateShoppingList, sum, setDescription, createOrder}) {
  return (<>
    <table className="table">
      <thead>
        <tr>
          <th scope="col" width="50">操作</th>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col" width="90">數量</th>
          <th scope="col">單價</th>
          <th scope="col">小計</th>
        </tr>
      </thead>
      <tbody>
        {
          shoppingList.map(shoppingItem => {
            return (
              <tr key={shoppingItem.id}>
                <td>
                  <button type="button" className="btn btn-sm" onClick={() => {
                    const newShoppingList = shoppingList.filter((keptItem) => {
                      return keptItem.id !== shoppingItem.id
                    })
                    setShoppingList(newShoppingList)
                  }}>x</button>
                </td>
                <td>{shoppingItem.name}</td>
                <td><small>{shoppingItem.description}</small></td>
                <td>
                  <select className="form-select" value={shoppingItem.quantity} onChange={(e) => {
                      const value = e.target.value;
                      updateShoppingList(shoppingItem, value);
                    }}>
                      {[...Array(10).keys()].map((item) => {
                        return (<option value={item + 1} key={item}>{item + 1}</option>)
                      })}
                    </select>
                </td>
                <td>{shoppingItem.price}</td>
                <td>{shoppingItem.subtotal}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    {
      shoppingList.length === 0 ?
      <div className="alert alert-primary text-center" role="alert">
        請選擇商品
      </div> :
      (<>
        <div className="text-end mb-3">
          <h5>總計: <span>${sum}</span></h5>
        </div>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="備註"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        ></textarea>
        <div className="text-end">
          <button className="btn btn-primary" onClick={(e) => {
            e.preventDefault()
            createOrder()
          }}>送出</button>
        </div>
      </>)
    }
    </>)
}

function Order({order}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h5>訂單</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">品項</th>
                <th scope="col">數量</th>
                <th scope="col">小計</th>
              </tr>
            </thead>
            <tbody>
              {
                // console.log(order)
                order.shoppingList.map(orderItem => {
                  return (
                    <tr key={orderItem.id}>
                      <td>{orderItem.name}</td>
                      <td>{orderItem.quantity}</td>
                      <td>{orderItem.subtotal}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <div className="text-end">備註: <span>{order.description}</span></div>
          <div className="text-end">
            <h5>總計: <span>${order.sum}</span></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {

  const [menu, setMenu] = useState(data)
  const [shoppingList, setShoppingList] = useState([])
  const [description, setDescription] = useState('')
  const [sum, setSum] = useState(0)
  const [order, setOrder] = useState({})

  const pickToShoppingList = (menuItem) => {
    const alreadyPickedItem = shoppingList.find(listItem => listItem.name === menuItem.name)
    if (alreadyPickedItem) {
      //   const incrementPickedItemInList = shoppingList.map(listItem => ((listItem.name === menuItem.name) ? {
      //   ...listItem,
      //   quantity: listItem.quantity + 1
      // }: listItem));

      // setShoppingList(incrementPickedItemInList);
      updateShoppingList(alreadyPickedItem, alreadyPickedItem.quantity+1)

    } else {
      setShoppingList([
        ...shoppingList,
        {
          ...menuItem,
          id: new Date().getTime(),
          quantity: 1,
          subtotal: menuItem.price,
        }
      ]);
    }

  }

  const updateShoppingList = (item, value) => {
    const newShoppingList = shoppingList.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: parseInt(value),
          subtotal: cartItem.price * parseInt(value)
        }
      }

      return cartItem;
    });

    setShoppingList(newShoppingList);
  }

  const createOrder = () => {
    setOrder({
      id: new Date().getTime(),
      shoppingList,
      description,
      sum
    });

    setShoppingList([])
    setDescription('')
  }

  useEffect(() => {
    const total = shoppingList.reduce((pre, next) => {
      return pre + next.price * next.quantity
    }, 0);

    setSum(total);
  }, [shoppingList])

  return (
    <>
      <h3>React Workshop Homework #2</h3>
      <div id="root">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <Menu menu={menu} pickToShoppingList={pickToShoppingList} />
            </div>
            <div className="col-md-8">

                <ShoppingListCart
                  shoppingList={shoppingList}
                  setShoppingList={setShoppingList}
                  updateShoppingList={updateShoppingList}
                  sum={sum}
                  setDescription={setDescription}
                  createOrder={createOrder} />

            </div>
          </div>

          <hr />

          <div className="row justify-content-center">
            <div className="col-8">
              {
                !order.id ?
                  <div className="alert alert-secondary text-center" role="alert">
                    尚未建立訂單
                  </div> :
                  <Order order={order} />
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
