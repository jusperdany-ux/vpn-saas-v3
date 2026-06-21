async function speedTest(node) {
  const start = Date.now();

  await fetch(node.url);

  const ping = Date.now() - start;

  return {
    node,
    ping,
    score: Math.max(100 - ping, 0)
  };
}

module.exports = { speedTest };