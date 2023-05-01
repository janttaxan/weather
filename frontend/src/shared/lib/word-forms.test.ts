import { WordForms } from 'shared/lib';

describe('word-forms', () => {
  it('should choose plural', () => {
    const itemForm = new WordForms('предмет', 'предмета', 'предметов', 'предметов');
    expect(itemForm.choosePlural(0)).toBe('предметов');
    expect(itemForm.choosePlural(1)).toBe('предмет');
    expect(itemForm.choosePlural(2)).toBe('предмета');
    expect(itemForm.choosePlural(5)).toBe('предметов');
    expect(itemForm.choosePlural(31)).toBe('предмет');
    expect(itemForm.choosePlural(223)).toBe('предмета');
    expect(itemForm.choosePlural(1000)).toBe('предметов');
  });

  it('should get plural', () => {
    const minuteWordForm = new WordForms('минута', 'минуты', 'минут');
    expect(minuteWordForm.getPlural(1)).toBe('минута');
    expect(minuteWordForm.getPlural(1, '_', true)).toBe('1_минута');
    expect(minuteWordForm.getPlural(2, '+')).toBe('2+минуты');
    expect(minuteWordForm.getPlural(5)).toBe('5\xa0минут');
  });

  it('should get plural, zero value', () => {
    const dayWordFormWithZero = new WordForms('день', 'дня', 'дней', 'дней');
    const dayWordFormWithoutZero = new WordForms('день', 'дня', 'дней');
    expect(dayWordFormWithZero.getPlural(0, '\xa0', true)).toBe('0\xa0дней');
    expect(dayWordFormWithoutZero.getPlural(0)).toBe('');
  });
});
