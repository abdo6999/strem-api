
## API Endpoints

#### root

- (/) will get all route

#### movies

- GET (/movies) will retarn all products

- GET (/movies/:id) will retarn product if id is exist

- POST (/movie) [token required] will create product if enter valid body and retarn the new product data

- PATCH (/movie/:id) [token required] will update product if id is exist and retarn the updated data

- DELETE (/movie/:id) [token required] will delete product if id is exist and retarn the delete product data

#### Users

- GET (/users) [token required] will get all users

- GET (/users/:id) [token required] retarn user if id is exist and

- POST (/user) will create user if you enter valid body retarn the new user data

- POST (/refresh-token) [token required] will make new access token and retarn it

- PATCH (/user/:id) [token required] will update user if id is exist retarn the updated data

- DELETE (/user/:id) [token required] will delete user if id is exist and retarn the delete user data

- POST (/login) will retarn access token and refreshtoken

#### watch-list

- GET (/watch-list) will get all orders

- GET (/watch-list/:id) retarn order if user_id is exist and

- POST (/watch-list) [token required] will create order if you enter valid body retarn the new order data

- POST (/watch-list/:id) [token required] will add product to cart if id is exist

- PATCH (/watch-list/:id) [token required] will update order if id is exist retarn the updated data

- DELETE (/watch-list/:id) [token required] will delete order if id is exist

### status 401

all route that need authenticatToken and you unauthenticated

### status 404

if route not exist

## Data Shapes

Users
#### movies

- id: number
- title: string
- year: string
- rated: string
- released: string
- genre: string
- plot: string
- language: string
- metascore: string
- imdbrating: string
- imdbvotes: string
- imdbid: number
- poster: number
- images: string[]

#### users

- id: number
- firstname: string
- lastname: string
- password: string
- email: string
- gender: string
- username: string

####  watch-list
- id: number
- user_id: number
- movie_id: number

