import { useState } from "react"
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

function App() {

  // const [menu, setMenu] = useState(data)

  return (
    <>
      <h3>React Workshop Homework #2</h3>
      <div id="root">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action"
                  ><div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">珍珠奶茶</h5>
                    <small>$50</small>
                  </div>
                  <p className="mb-1">香濃奶茶搭配QQ珍珠</p></a
                ><a href="#" className="list-group-item list-group-item-action"
                  ><div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">冬瓜檸檬</h5>
                    <small>$45</small>
                  </div>
                  <p className="mb-1">清新冬瓜配上新鮮檸檬</p></a
                ><a href="#" className="list-group-item list-group-item-action"
                  ><div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">翡翠檸檬</h5>
                    <small>$55</small>
                  </div>
                  <p className="mb-1">綠茶與檸檬的完美結合</p></a
                ><a href="#" className="list-group-item list-group-item-action"
                  ><div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">四季春茶</h5>
                    <small>$45</small>
                  </div>
                  <p className="mb-1">香醇四季春茶，回甘無比</p></a
                ><a href="#" className="list-group-item list-group-item-action"
                  ><div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">阿薩姆奶茶</h5>
                    <small>$50</small>
                  </div>
                  <p className="mb-1">阿薩姆紅茶搭配香醇鮮奶</p></a
                ><a href="#" className="list-group-item list-group-item-action"
                  ><div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">檸檬冰茶</h5>
                    <small>$45</small>
                  </div>
                  <p className="mb-1">檸檬與冰茶的清新組合</p></a
                ><a href="#" className="list-group-item list-group-item-action"
                  ><div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">芒果綠茶</h5>
                    <small>$55</small>
                  </div>
                  <p className="mb-1">芒果與綠茶的獨特風味</p></a
                ><a href="#" className="list-group-item list-group-item-action"
                  ><div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">抹茶拿鐵</h5>
                    <small>$60</small>
                  </div>
                  <p className="mb-1">抹茶與鮮奶的絕配</p></a
                >
              </div>
            </div>
            <div className="col-md-8">
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
                  <tr>
                    <td><button type="button" className="btn btn-sm">x</button></td>
                    <td>四季春茶</td>
                    <td><small>香醇四季春茶，回甘無比</small></td>
                    <td>
                      <select className="form-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </td>
                    <td>45</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td><button type="button" className="btn btn-sm">x</button></td>
                    <td>翡翠檸檬</td>
                    <td><small>綠茶與檸檬的完美結合</small></td>
                    <td>
                      <select className="form-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </td>
                    <td>55</td>
                    <td>55</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-end mb-3">
                <h5>總計: <span>$100</span></h5>
              </div>
              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="備註"
              ></textarea>
              <div className="text-end">
                <button className="btn btn-primary">送出</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row justify-content-center">
            <div className="col-8">
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
                        <tr>
                          <td>翡翠檸檬</td>
                          <td>7</td>
                          <td>385</td>
                        </tr>
                        <tr>
                          <td>冬瓜檸檬</td>
                          <td>7</td>
                          <td>315</td>
                        </tr>
                        <tr>
                          <td>冬瓜檸檬</td>
                          <td>4</td>
                          <td>180</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-end">備註: <span>都不要香菜</span></div>
                    <div className="text-end">
                      <h5>總計: <span>$145</span></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
