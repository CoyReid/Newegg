# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create(username: 'user1', password: 'password', email: 'user1@gmail.com', address: '567 Fake Address St', admin: true)
u2 = User.create(username: 'user2', password: 'password', email: 'user2@aol.com', address: '1234 Fake Address St', admin: true)

i1 = u1.items.create(name: 'fake name 1', brand: 'fake brand 1', stock: true, price: 12.99, rating: 5, category: "fake category 1", specs: "this is an item", image: 'imglink.com')
i2 = u1.items.create(name: 'fake name 2', brand: 'fake brand 2', stock: true, price: 17.99, rating: 4, category: "fake category 2", specs: "this is an item", image: 'imglink.com')
i3 = u1.items.create(name: 'fake name 3', brand: 'fake brand 3', stock: false, price: 11.99, rating: 3, category: "fake category 1", specs: "this is an item", image: 'imglink.com')
i4 = u2.items.create(name: 'fake name 4', brand: 'fake brand 4', stock: true, price: 19.99, rating: 5, category: "fake category 3", specs: "this is an item", image: 'imglink.com')