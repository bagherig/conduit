import { Migration } from '@mikro-orm/migrations';

export class AddArticleAuthorsRelation extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'CREATE TABLE `article_authors` (`article_id` INT UNSIGNED NOT NULL, `user_id` INT UNSIGNED NOT NULL, PRIMARY KEY (`article_id`, `user_id`));',
    );
    this.addSql('ALTER TABLE `article_authors` ADD INDEX `IDX_article_id` (`article_id`);');
    this.addSql('ALTER TABLE `article_authors` ADD INDEX `IDX_user_id` (`user_id`);');
    this.addSql(
      'ALTER TABLE `article_authors` ADD CONSTRAINT `FK_article_id` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;',
    );
    this.addSql(
      'ALTER TABLE `article_authors` ADD CONSTRAINT `FK_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;',
    );
  }
}
