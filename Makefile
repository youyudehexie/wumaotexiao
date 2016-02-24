TESTS = $(shell find tests/$(target) -type f -name "*.test.js")
TEST_TIMEOUT = 5*1000
MOCHA_REPORTER = spec

test:
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		-r should \
		--compilers js:babel-core/register \
		--timeout $(TEST_TIMEOUT) \
		$(TESTS)

.PHONY: test

