.PHONY: init-safe-chain init dev build preview deploy

SAFE_CHAIN_SHIMS := $(HOME)/.safe-chain/shims
SAFE_CHAIN_BIN := $(HOME)/.safe-chain/bin

init-safe-chain:
	@echo "Running safe-chain installer (will install or update as needed)..."
	sh scripts/install-safe-chain.sh
	@echo "safe-chain installation/verification complete. Restart your terminal for shell protection."

init: init-safe-chain
	@echo "Installing Node.js dependencies with safe-chain pnpm..."
	PATH="$(SAFE_CHAIN_SHIMS):$(SAFE_CHAIN_BIN):$(PATH)" pnpm install
	@echo "Node.js dependencies installed successfully"

dev:
	pnpm dev

build:
	pnpm build

preview:
	pnpm preview

deploy:
	pnpm build && npx wrangler pages deploy dist