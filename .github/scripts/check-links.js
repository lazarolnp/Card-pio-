#!/usr/bin/env node
"use strict";

/**
 * Zero-dependency sanity check for a static, no-build site:
 *  - every local href/src in index.html points to a file that exists
 *  - every in-page anchor link (#id) points to an element that exists
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const HTML_FILES = ["index.html"];
const EXCLUDE_PREFIXES = ["http://", "https://", "//", "mailto:", "tel:", "data:"];

function isLocalFileRef(ref) {
  return ref && !ref.startsWith("#") && !EXCLUDE_PREFIXES.some((p) => ref.startsWith(p));
}

let problems = [];

for (const file of HTML_FILES) {
  const html = fs.readFileSync(path.join(ROOT, file), "utf8");

  var ids = new Set();
  var idRegex = /\bid=["']([^"']+)["']/g;
  var m;
  while ((m = idRegex.exec(html))) ids.add(m[1]);

  var attrRegex = /\b(?:href|src)=["']([^"']+)["']/g;
  while ((m = attrRegex.exec(html))) {
    var ref = m[1];
    if (ref.startsWith("#")) {
      var anchorId = ref.slice(1);
      if (anchorId && !ids.has(anchorId)) {
        problems.push(file + ": anchor link \"" + ref + "\" has no matching id=\"" + anchorId + "\"");
      }
    } else if (isLocalFileRef(ref)) {
      var resolved = path.join(ROOT, ref.split("?")[0].split("#")[0]);
      if (!fs.existsSync(resolved)) {
        problems.push(file + ": broken local reference \"" + ref + "\" (" + resolved + " not found)");
      }
    }
  }
}

if (problems.length) {
  console.error("Found " + problems.length + " problem(s):\n");
  problems.forEach(function (p) { console.error("  - " + p); });
  process.exit(1);
}

console.log("OK: all local asset references and in-page anchors resolve.");
