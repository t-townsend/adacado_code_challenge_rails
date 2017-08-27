class AmazonAPI

  require 'httparty'
  require 'net/http'
  
  ENDPOINT = "webservices.amazon.ca"

  REQUEST_URI = "/onca/xml"
  # ACCESS_KEY = "ACCESS_KEY"
  # ASSOCIATE_TAG = "ASSOCIATE_TAG"


  def generate_request_url(params)
    
  
    # Set current timestamp if not set
    params["Timestamp"] = Time.now.gmtime.iso8601 if !params.key?("Timestamp")

    # Generate the canonical query
    canonical_query_string = params.sort.collect do |key, value|
      [URI.escape(key.to_s, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]")), URI.escape(value.to_s, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))].join('=')
    end.join('&')

    # Generate the string to be signed
    string_to_sign = "GET\n#{ENDPOINT}\n#{REQUEST_URI}\n#{canonical_query_string}"

    # Generate the signature required by the Product Advertising API
    signature = Base64.encode64(OpenSSL::HMAC.digest(OpenSSL::Digest.new('sha256'), ENV['SECRET_KEY'], string_to_sign)).strip()

    # Generate the signed URL
    request_url = "http://#{ENDPOINT}#{REQUEST_URI}?#{canonical_query_string}&Signature=#{URI.escape(signature, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))}"

    puts "Signed URL: \"#{request_url}\""
  end

  def by_keywords(keywords)
    params = {
      "Service" => "AWSECommerceService",
      "Operation" => "ItemSearch",
      "AWSAccessKeyId" => ENV['ACCESS_KEY'],
      "AssociateTag" => ENV['ASSOCIATE_TAG'],
      "SearchIndex" => "Toys",
      "Keywords" => keywords,
      "ResponseGroup" => "EditorialReview,Images,ItemAttributes,Offers,Reviews,Variations"
    }
    generate_request_url(params)
  end
end

