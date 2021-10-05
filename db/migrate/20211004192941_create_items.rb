class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :brand
      t.float :price
      t.integer :rating
      t.string :category
      t.text :specs
      t.string :image

      t.timestamps
    end
  end
end
