class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :stock, :price, :rating, :category, :specs, :image, :user_item
  has_many :users
  def user_item
    current_user&.user_items&.find_by(item_id: object.id)
  end
end
