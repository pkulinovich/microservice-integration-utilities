package main

import (
	"encoding/json"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"

	"github.com/iPaulK/microservice-integration-utilities/go/internal/services"
)

// BodyRequest is our self-made struct to process JSON request from Client
type BodyRequest struct {
	RequestXml string `json:"xml"`
}

// Handler function Using AWS Lambda Proxy Request
func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	// BodyRequest will be used to take the json response from client and build it
	bodyRequest := BodyRequest{
		RequestXml: "",
	}

	// Unmarshal the json, return 404 if error
	err := json.Unmarshal([]byte(request.Body), &bodyRequest)
	if err != nil {
		return events.APIGatewayProxyResponse{Body: err.Error(), StatusCode: 404}, nil
	}


	xmlConverter := services.NewXmlConverter(bodyRequest.RequestXml)

	res, err := xmlConverter.ToJson();
	if err != nil {
		return events.APIGatewayProxyResponse{Body: err.Error(), StatusCode: 404}, nil
	}

	//Returning response with AWS Lambda Proxy Response
	return events.APIGatewayProxyResponse{Body: string(res), StatusCode: 200}, nil
}

func main() {
	lambda.Start(Handler)
}