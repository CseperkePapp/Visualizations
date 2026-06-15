import { describe, expect, it } from 'vitest';
import {
  computeNextTaskNumber,
  syncCounters,
  syncStatusCells,
  syncTaskIndex,
  type StatusRule,
  type TaskHeader,
} from '../../scripts/sync-task-index.js';

const table = [
  '| ID | Task | Priority | Status |',
  '| -- | ---- | -------- | ------ |',
  '| 129 | [Connectors](TASK-129-connectors.md) | P2 | planning |',
  '| 130 | [Workflow](TASK-130-workflow.md) | P3 | todo |',
  '| 052.1 | [Absorbed](DONE-TASK-052.1-x.md) | P3 | absorbed into 081 |',
  '| 999 | a non-task row with a status col and no link | x | whatever |',
].join('\n');

function rule(desired: string, ...accepted: string[]): StatusRule {
  return { desired, accepted: new Set([desired, ...accepted]) };
}

describe('syncStatusCells', () => {
  it('rewrites a drifted status cell to the header value', () => {
    const rules = new Map([['129', rule('done')]]);
    const { content, changes } = syncStatusCells(table, rules, 'README.md');
    expect(changes).toHaveLength(1);
    expect(content).toContain('| 129 | [Connectors](TASK-129-connectors.md) | P2 | done |');
  });

  it('leaves cells that already match or use allowlisted variants', () => {
    const rules = new Map([
      ['130', rule('todo')],
      ['052.1', rule('absorbed', 'absorbed into 081')],
    ]);
    const { changes } = syncStatusCells(table, rules, 'README.md');
    expect(changes).toEqual([]);
  });

  it('is idempotent', () => {
    const rules = new Map([['129', rule('done')]]);
    const once = syncStatusCells(table, rules, 'README.md').content;
    const twice = syncStatusCells(once, rules, 'README.md');
    expect(twice.changes).toEqual([]);
    expect(twice.content).toBe(once);
  });
});

describe('syncCounters', () => {
  it('recomputes both counters and is idempotent', () => {
    const content = 'Foo\n**Next task:** 130\nbar\n1. Get next task number (currently: **130**)\n';
    const first = syncCounters(content, '136', 'README.md');
    expect(first.changes).toHaveLength(2);
    expect(first.content).toContain('**Next task:** 136');
    expect(first.content).toContain('currently: **136**');
    const second = syncCounters(first.content, '136', 'README.md');
    expect(second.changes).toEqual([]);
  });
});

describe('computeNextTaskNumber', () => {
  it('returns max top-level id plus one', () => {
    const headers: TaskHeader[] = [
      { id: '129', status: 'done', filename: 'x' },
      { id: '135', status: 'todo', filename: 'x' },
      { id: '135.2', status: 'todo', filename: 'x' },
    ];
    expect(computeNextTaskNumber(headers)).toBe('136');
  });
});

describe('syncTaskIndex integration', () => {
  it('the live task index is in sync after adoption', () => {
    expect(() => syncTaskIndex(false)).not.toThrow();
  });
});