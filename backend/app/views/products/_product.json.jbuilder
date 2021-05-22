json.extract! product, :id, :name, :type, :flavor, :company, :price, :offical_url, :amazon_url, :created_at, :updated_at
json.url product_url(product, format: :json)
