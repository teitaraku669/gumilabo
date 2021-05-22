class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :type
      t.string :flavor
      t.string :company
      t.integer :price
      t.string :offical_url
      t.string :amazon_url
      t.string :package_url
      t.string :image_url

      t.timestamps
    end
  end
end
