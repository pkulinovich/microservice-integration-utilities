package services

import (
	"strings"

	xj "github.com/basgys/goxml2json"
)

type XmlConverter struct {
	Body string
}

// NewXmlConverter creates a new converter
func NewXmlConverter(xml string) *XmlConverter {
	return &XmlConverter{
		xml,
	}
}

// ToJson converts the given XML document to JSON
func (x *XmlConverter) ToJson() (string, error) {
	// xml is an io.Reader
	xml := strings.NewReader(x.Body)
	json, err := xj.Convert(xml)
	if err != nil {
		return "", err
	}

	return json.String(), nil
}